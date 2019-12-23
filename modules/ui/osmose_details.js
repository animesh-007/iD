import {
    event as d3_event,
    select as d3_select
} from 'd3-selection';

import { dataEn } from '../../data';
import { modeSelect } from '../modes/select';
import { t } from '../util/locale';
import { utilDisplayName, utilEntityOrMemberSelector } from '../util';


export function uiOsmoseDetails(context) {
    var _error;


    function errorDetail(d) {
        var unknown = t('inspector.unknown');

        if (!d) return unknown;

        // Some errors fall back to their category for strings
        var i, et;
        var keys = [d.error_type, d.item];
        for (i = 0; i < 2; i++) {
            et = dataEn.QA.osmose.error_types[keys[i]];

            if (et && et.description) {
                return t('QA.osmose.error_types.' + keys[i] + '.description', d.replacements);
            }
        }

        return unknown;
    }


    function osmoseDetails(selection) {
        var details = selection.selectAll('.error-details')
            .data(
                (_error ? [_error] : []),
                function(d) { return d.id + '-' + (d.status || 0); }
            );

        details.exit()
            .remove();

        var detailsEnter = details.enter()
            .append('div')
            .attr('class', 'error-details error-details-container');


        // description
        var descriptionEnter = detailsEnter
            .append('div')
            .attr('class', 'error-details-description');

        descriptionEnter
            .append('h4')
            .text(function() { return t('QA.keepRight.detail_description'); });

        descriptionEnter
            .append('div')
            .attr('class', 'error-details-description-text')
            .html(errorDetail);

        // If there are entity links in the error message..
        descriptionEnter.selectAll('.error_entity_link, .error_object_link')
            .each(function() {
                var link = d3_select(this);
                var entityID = this.textContent;
                var entity = context.hasEntity(entityID);

                // Add click handler
                link
                    .on('mouseenter', function() {
                        context.surface().selectAll(utilEntityOrMemberSelector([entityID], context.graph()))
                            .classed('hover', true);
                    })
                    .on('mouseleave', function() {
                        context.surface().selectAll('.hover')
                            .classed('hover', false);
                    })
                    .on('click', function() {
                        d3_event.preventDefault();
                        var osmlayer = context.layers().layer('osm');
                        if (!osmlayer.enabled()) {
                            osmlayer.enabled(true);
                        }

                        context.map().centerZoom(_error.loc, 20);

                        if (entity) {
                            context.enter(modeSelect(context, [entityID]));
                        } else {
                            context.loadEntity(entityID, function() {
                                context.enter(modeSelect(context, [entityID]));
                            });
                        }
                    });

                // Replace with friendly name if possible
                // (The entity may not yet be loaded into the graph)
                if (entity) {
                    var name = utilDisplayName(entity);  // try to use common name

                    if (!name) {
                        var preset = context.presets().match(entity, context.graph());
                        name = preset && !preset.isFallback() && preset.name();  // fallback to preset name
                    }

                    if (name) {
                        this.innerText = name;
                    }
                }
            });

        // Don't hide entities related to this error - #5880
        context.features().forceVisible(_error.elems);
        context.map().pan([0,0]);  // trigger a redraw
    }


    osmoseDetails.error = function(val) {
        if (!arguments.length) return _error;
        _error = val;
        return osmoseDetails;
    };


    return osmoseDetails;
}