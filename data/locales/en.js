locale.en = {
    "modes": {
        "add_area": {
            "title": "Area",
            "description": "Add parks, buildings, lakes or other areas to the map.",
            "tail": "Click on the map to start drawing an area, like a park, lake, or building."
        },
        "add_line": {
            "title": "Line",
            "description": "Add highways, streets, pedestrian paths, canals or other lines to the map.",
            "tail": "Click on the map to start drawing a road, path, or route."
        },
        "add_point": {
            "title": "Point",
            "description": "Add restaurants, monuments, postal boxes or other points to the map.",
            "tail": "Click on the map to add a point."
        },
        "browse": {
            "title": "Browse",
            "description": "Pan and zoom the map."
        },
        "draw_area": {
            "tail": "Click to add nodes to your area. Click the first node to finish the area."
        },
        "draw_line": {
            "tail": "Click to add more nodes to the line. Click on other lines to connect to them, and double-click to end the line."
        }
    },
    "operations": {
        "add": {
            "annotation": {
                "point": "Added a point.",
                "vertex": "Added a node to a way."
            }
        },
        "start": {
            "annotation": {
                "line": "Started a line.",
                "area": "Started an area."
            }
        },
        "continue": {
            "annotation": {
                "line": "Continued a line.",
                "area": "Continued an area."
            }
        },
        "cancel_draw": {
            "annotation": "Canceled drawing."
        },
        "change_tags": {
            "annotation": "Changed tags."
        },
        "circularize": {
            "title": "Circularize",
            "description": {
                "line": "Make this line circular.",
                "area": "Make this area circular."
            },
            "key": "O",
            "annotation": {
                "line": "Made a line circular.",
                "area": "Made an area circular."
            },
            "not_closed": "This can't be made circular because it's not a loop."
        },
        "orthogonalize": {
            "title": "Orthogonalize",
            "description": "Square these corners.",
            "key": "Q",
            "annotation": {
                "line": "Squared the corners of a line.",
                "area": "Squared the corners of an area."
            },
            "not_closed": "This can't be made square because it's not a loop."
        },
        "delete": {
            "title": "Delete",
            "description": "Remove this from the map.",
            "annotation": {
                "point": "Deleted a point.",
                "vertex": "Deleted a node from a way.",
                "line": "Deleted a line.",
                "area": "Deleted an area.",
                "relation": "Deleted a relation.",
                "multiple": "Deleted {n} objects."
            }
        },
        "connect": {
            "annotation": {
                "point": "Connected a way to a point.",
                "vertex": "Connected a way to another.",
                "line": "Connected a way to a line.",
                "area": "Connected a way to an area."
            }
        },
        "disconnect": {
            "title": "Disconnect",
            "description": "Disconnect these lines/areas from each other.",
            "key": "D",
            "annotation": "Disconnected lines/areas.",
            "not_connected": "There aren't enough lines/areas here to disconnect."
        },
        "merge": {
            "title": "Merge",
            "description": "Merge these lines.",
            "key": "C",
            "annotation": "Merged {n} lines.",
            "not_eligible": "These features can't be merged.",
            "not_adjacent": "These lines can't be merged because they aren't connected."
        },
        "move": {
            "title": "Move",
            "description": "Move this to a different location.",
            "key": "M",
            "annotation": {
                "point": "Moved a point.",
                "vertex": "Moved a node in a way.",
                "line": "Moved a line.",
                "area": "Moved an area.",
                "multiple": "Moved multiple objects."
            },
            "incomplete_relation": "This feature can't be moved because it hasn't been fully downloaded."
        },
        "rotate": {
            "title": "Rotate",
            "description": "Rotate this object around its centre point.",
            "key": "R",
            "annotation": {
                "line": "Rotated a line.",
                "area": "Rotated an area."
            }
        },
        "reverse": {
            "title": "Reverse",
            "description": "Make this line go in the opposite direction.",
            "key": "V",
            "annotation": "Reversed a line."
        },
        "split": {
            "title": "Split",
            "description": {
                "line": "Split this line into two at this node.",
                "area": "Split the boundary of this area into two.",
                "multiple": "Split the lines/area boundaries at this node into two."
            },
            "key": "X",
            "annotation": {
                "line": "Split a line.",
                "area": "Split an area boundary.",
                "multiple": "Split {n} lines/area boundaries."
            },
            "not_eligible": "Lines can't be split at their beginning or end.",
            "multiple_ways": "There are too many lines here to split."
        }
    },
    "nothing_to_undo": "Nothing to undo.",
    "nothing_to_redo": "Nothing to redo.",
    "just_edited": "You just edited OpenStreetMap!",
    "browser_notice": "This editor is supported in Firefox, Chrome, Safari, Opera, and Internet Explorer 9 and above. Please upgrade your browser or use Potlatch 2 to edit the map.",
    "view_on_osm": "View on OSM",
    "zoom_in_edit": "zoom in to edit the map",
    "logout": "logout",
    "loading_auth": "Connecting to OpenStreetMap...",
    "report_a_bug": "report a bug",
    "commit": {
        "title": "Save Changes",
        "description_placeholder": "Brief description of your contributions",
        "message_label": "Commit message",
        "upload_explanation": "The changes you upload as {user} will be visible on all maps that use OpenStreetMap data.",
        "save": "Save",
        "cancel": "Cancel",
        "warnings": "Warnings",
        "modified": "Modified",
        "deleted": "Deleted",
        "created": "Created"
    },
    "contributors": {
        "list": "Contributed by {users}",
        "truncated_list": "Contributed by {users} and {count} others"
    },
    "geocoder": {
        "title": "Find a place",
        "placeholder": "Find a place",
        "no_results": "Couldn't locate a place named '{name}'"
    },
    "geolocate": {
        "title": "Show My Location"
    },
    "inspector": {
        "no_documentation_combination": "There is no documentation available for this tag combination",
        "no_documentation_key": "There is no documentation available for this key",
        "show_more": "Show More",
        "new_tag": "New tag",
        "view_on_osm": "View on openstreetmap.org",
        "editing_feature": "Editing {feature}",
        "additional": "Additional tags",
        "choose": "Select feature type",
        "results": "{n} results for {search}",
        "reference": "View on OpenStreetMap Wiki",
        "back_tooltip": "Change feature type"
    },
    "background": {
        "title": "Background",
        "description": "Background settings",
        "percent_brightness": "{opacity}% brightness",
        "fix_misalignment": "Fix misalignment",
        "reset": "reset"
    },
    "restore": {
        "heading": "You have unsaved changes",
        "description": "Do you wish to restore unsaved changes from a previous editing session?",
        "restore": "Restore",
        "reset": "Reset"
    },
    "save": {
        "title": "Save",
        "help": "Save changes to OpenStreetMap, making them visible to other users.",
        "no_changes": "No changes to save.",
        "error": "An error occurred while trying to save",
        "uploading": "Uploading changes to OpenStreetMap.",
        "unsaved_changes": "You have unsaved changes"
    },
    "splash": {
        "welcome": "Welcome to the iD OpenStreetMap editor",
        "text": "iD is a friendly but powerful tool for contributing to the world's best free world map. This is development version {version}. For more information see {website} and report bugs at {github}.",
        "walkthrough": "Start the Walkthrough",
        "start": "Edit Now"
    },
    "source_switch": {
        "live": "live",
        "lose_changes": "You have unsaved changes. Switching the map server will discard them. Are you sure you want to switch servers?",
        "dev": "dev"
    },
    "tag_reference": {
        "description": "Description",
        "on_wiki": "{tag} on wiki.osm.org",
        "used_with": "used with {type}"
    },
    "validations": {
        "untagged_point": "Untagged point",
        "untagged_line": "Untagged line",
        "untagged_area": "Untagged area",
        "many_deletions": "You're deleting {n} objects. Are you sure you want to do this? This will delete them from the map that everyone else sees on openstreetmap.org.",
        "tag_suggests_area": "The tag {tag} suggests line should be area, but it is not an area",
        "deprecated_tags": "Deprecated tags: {tags}"
    },
    "zoom": {
        "in": "Zoom In",
        "out": "Zoom Out"
    },
    "cannot_zoom": "Cannot zoom out further in current mode.",
    "gpx": {
        "local_layer": "Local GPX file",
        "drag_drop": "Drag and drop a .gpx file on the page"
    },
    "help": {
        "title": "Help",
        "help": "# Help\n\nThis is an editor for [OpenStreetMap](http://www.openstreetmap.org/), the\nfree and editable map of the world. You can use it to add and update\ndata in your area, making an open-source and open-data map of the world\nbetter for everyone.\n\nEdits that you make on this map will be visible to everyone who uses\nOpenStreetMap. In order to make an edit, you'll need a\n[free OpenStreetMap account](https://www.openstreetmap.org/user/new).\n\nThe [iD editor](http://ideditor.com/) is a collaborative project with [source\ncode available on GitHub](https://github.com/systemed/iD).\n",
        "editing_saving": "# Editing & Saving\n\nThis editor is designed to work primarily online, and you're accessing\nit through a website right now.\n\n### Selecting Features\n\nTo select a map feature, like a road or point of interest, click\non it on the map. This will highlight the selected feature, open a panel with\ndetails about it, and show a menu of things you can do with the feature.\n\nMultiple features can be selected by holding the 'Shift' key, clicking,\nand dragging on the map. This will select all features within the box\nthat's drawn, allowing you to do things with several features at once.\n\n### Saving Edits\n\nWhen you make changes like editing roads, buildings, and places, these are\nstored locally until you save them to the server. Don't worry if you make\na mistake - you can undo changes by clicking the undo button, and redo\nchanges by clicking the redo button.\n\nClick 'Save' to finish a group of edits - for instance, if you've completed\nan area of town and would like to start on a new area. You'll have a chance\nto review what you've done, and the editor supplies helpful suggestions\nand warnings if something doesn't seem right about the changes.\n\nIf everything looks good, you can enter a short comment explaining the change\nyou made, and click 'Save' again to post the changes\nto [OpenStreetMap.org](http://www.openstreetmap.org/), where they are visible\nto all other users and available for others to build and improve upon.\n\nIf you can't finish your edits in one sitting, you can leave the editor\nwindow and come back (on the same browser and computer), and the\neditor application will offer to restore your work.\n",
        "roads": "# Roads\n\nYou can create, fix, and delete roads with this editor. Roads can be all\nkinds: paths, highways, trails, cycleways, and more - any often-crossed\nsegment should be mappable.\n\n### Selecting\n\nClick on a road to select it. An outline should become visible, along\nwith a small tools menu on the map and a sidebar showing more information\nabout the road.\n\n### Modifying\n\nOften you'll see roads that aren't aligned to the imagery behind them\nor to a GPS track. You can adjust these roads so they are in the correct\nplace.\n\nFirst click on the road you want to change. This will highlight it and show\ncontrol points along it that you can drag to better locations. If\nyou want to add new control points for more detail, double-click a part\nof the road without a node, and one will be added.\n\nIf the road connects to another road, but doesn't properly connect on\nthe map, you can drag one of its control points onto the other road in\norder to join them. Having roads connect is important for the map\nand essential for providing driving directions.\n\nYou can also click the 'Move' tool or press the `M` shortcut key to move the entire road at\none time, and then click again to save that movement.\n\n### Deleting\n\nIf a road is entirely incorrect - you can see that it doesn't exist in satellite\nimagery and ideally have confirmed locally that it's not present - you can delete\nit, which removes it from the map. Be cautious when deleting features -\nlike any other edit, the results are seen by everyone and satellite imagery\nis often out of date, so the road could simply be newly built.\n\nYou can delete a road by clicking on it to select it, then clicking the\ntrash can icon or pressing the 'Delete' key.\n\n### Creating\n\nFound somewhere there should be a road but there isn't? Click the 'Line'\nicon in the top-left of the editor or press the shortcut key `2` to start drawing\na line.\n\nClick on the start of the road on the map to start drawing. If the road\nbranches off from an existing road, start by clicking on the place where they connect.\n\nThen click on points along the road so that it follows the right path, according\nto satellite imagery or GPS. If the road you are drawing crosses another road, connect\nit by clicking on the intersection point. When you're done drawing, double-click\nor press 'Return' or 'Enter' on your keyboard.\n",
        "gps": "# GPS\n\nGPS data is the most trusted source of data for OpenStreetMap. This editor\nsupports local traces - `.gpx` files on your local computer. You can collect\nthis kind of GPS trace with a number of smartphone applications as well as\npersonal GPS hardware.\n\nFor information on how to perform a GPS survey, read\n[Surveying with a GPS](http://learnosm.org/en/beginner/using-gps/).\n\nTo use a GPX track for mapping, drag and drop the GPX file onto the map\neditor. If it's recognized, it will be added to the map as a bright green\nline. Click on the 'Background Settings' menu on the left side to enable,\ndisable, or zoom to this new GPX-powered layer.\n\nThe GPX track isn't directly uploaded to OpenStreetMap - the best way to\nuse it is to draw on the map, using it as a guide for the new features that\nyou add.\n",
        "imagery": "# Imagery\n\nAerial imagery is an important resource for mapping. A combination of\nairplane flyovers, satellite views, and freely-compiled sources are available\nin the editor under the 'Background Settings' menu on the left.\n\nBy default a [Bing Maps](http://www.bing.com/maps/) satellite layer is\npresented in the editor, but as you pan and zoom the map to new geographical\nareas, new sources will become available. Some countries, like the United\nStates, France, and Denmark have very high-quality imagery available for some areas.\n\nImagery is sometimes offset from the map data because of a mistake on the\nimagery provider's side. If you see a lot of roads shifted from the background,\ndon't immediately move them all to match the background. Instead you can adjust\nthe imagery so that it matches the existing data by clicking 'Fix alignment' at\nthe bottom of the Background Settings UI.\n",
        "addresses": "# Addresses\n\nAddresses are some of the most useful information for the map.\n\nAlthough addresses are often represented as parts of streets, in OpenStreetMap\nthey're recorded as attributes of buildings and places along streets.\n\nYou can add address information to places mapped as building outlines as well\nas well as those mapped as single points. The optimal source of address\ndata is from an on-the-ground survey or personal knowledge - as with any\nother feature, copying from commercial sources like Google Maps is strictly\nforbidden.\n",
        "inspector": "# Using the Inspector\n\nThe inspector is the user interface element on the right-hand side of the\npage that appears when a feature is selected and allows you to edit its details.\n\n### Selecting a Feature Type\n\nAfter you add a point, line, or area, you can choose what type of feature it\nis, like whether it's a highway or residential road, supermarket or cafe.\nThe inspector will display buttons for common feature types, and you can\nfind others by typing what you're looking for in the search box.\n\nClick the 'i' in the bottom-right-hand corner of a feature type button to\nlearn more about it. Click a button to choose that type.\n\n### Using Forms and Editing Tags\n\nAfter you choose a feature type, or when you select a feature that already\nhas a type assigned, the inspector will display fields with details about\nthe feature like its name and address.\n\nBelow the fields you see, you can click icons to add other details,\nlike [Wikipedia](http://www.wikipedia.org/) information, wheelchair\naccess, and more.\n\nAt the bottom of the inspector, click 'Additional tags' to add arbitrary\nother tags to the element. [Taginfo](http://taginfo.openstreetmap.org/) is a\ngreat resource for learn more about popular tag combinations.\n\nChanges you make in the inspector are automatically applied to the map.\nYou can undo them at any time by clicking the 'Undo' button.\n\n### Closing the Inspector\n\nYou can close the inspector by clicking the close button in the top-right,\npressing the 'Escape' key, or clicking on the map.\n",
        "buildings": "# Buildings\n\nOpenStreetMap is the world's largest database of buildings. You can create\nand improve this database.\n\n### Selecting\n\nYou can select a building by clicking on its border. This will highlight the\nbuilding and open a small tools menu and a sidebar showing more information\nabout the building.\n\n### Modifying\n\nSometimes buildings are incorrectly placed or have incorrect tags.\n\nTo move an entire building, select it, then click the 'Move' tool. Move your\nmouse to shift the building, and click when it's correctly placed.\n\nTo fix the specific shape of a building, click and drag the nodes that form\nits border into better places.\n\n### Creating\n\nOne of the main questions around adding buildings to the map is that\nOpenStreetMap records buildings both as shapes and points. The rule of thumb\nis to _map a building as a shape whenever possible_, and map companies, homes,\namenities, and other things that operate out of buildings as points placed\nwithin the building shape.\n\nStart drawing a building as a shape by clicking the 'Area' button in the top\nleft of the interface, and end it either by pressing 'Return' on your keyboard\nor clicking on the first node drawn to close the shape.\n\n### Deleting\n\nIf a building is entirely incorrect - you can see that it doesn't exist in satellite\nimagery and ideally have confirmed locally that it's not present - you can delete\nit, which removes it from the map. Be cautious when deleting features -\nlike any other edit, the results are seen by everyone and satellite imagery\nis often out of date, so the road could simply be newly built.\n\nYou can delete a building by clicking on it to select it, then clicking the\ntrash can icon or pressing the 'Delete' key.\n"
    },
    "intro": {
        "navigation": {
            "drag": "The main map area shows OpenStreetMap data on top of a background. You can navigate by dragging and scrolling, just like any web map. **Drag the map!**",
            "select": "Map features are represented three ways: using points, lines or areas. All features can be selected by clicking on them. **Click on the point to select it.**",
            "header": "The header shows us the feature type.",
            "pane": "When a feature is selected, the feature editor is displayed. The header shows us the feature type and the main pane shows the feature's attributes, such as its name and address. **Close the feature editor with the close button in the top right.**"
        },
        "points": {
            "add": "Points can be used to represent features such as shops, restaurants and monuments. They mark a specific location, and describe what's there. **Click the Point button to add a new point.**",
            "place": "The point can be placed by clicking on the map. **Place the point on top of the building.**",
            "search": "There many different features that can be represented by points. The point you just added is a Cafe. **Search for 'Cafe' **",
            "choose": "**Choose Cafe from the grid.**",
            "describe": "The point is now marked as a cafe. Using the feature editor, we can add more information about the feature. **Add a name**",
            "close": "The feature editor can be closed by clicking on the close button. **Close the feature editor**",
            "reselect": "Often points will already exist, but have mistakes or be incomplete. We can edit existing points. **Select the point you just created.**",
            "fixname": "**Change the name and close the feature editor.**",
            "reselect_delete": "All features on the map can be deleted. **Click on the point you created.**",
            "delete": "The menu around the point contains operations that can be performed on it, including delete. **Delete the point.**"
        },
        "areas": {
            "add": "Areas are a more detailed way to represent features. They provide information on the boundaries of the feature. Areas can be used for most features types points can be used for, and are often preferred. **Click the Area button to add a new area.**",
            "corner": "Areas are drawn by placing nodes that mark the boundary of the area. **Place the starting node on one of the corners of the playground.**",
            "place": "Draw the area by placing more nodes. Finish the area by clicking on the starting node. **Draw an area for the playground.**",
            "search": "**Search for Playground.**",
            "choose": "**Choose Playground from the grid.**",
            "describe": "**Add a name, and close the feature editor**"
        },
        "lines": {
            "add": "Lines are used to represent features such as roads, railways and rivers. **Click the Line button to add a new line.**",
            "start": "**Start the line by clicking on the end of the road.**",
            "intersect": "Click to add more nodes to the line. You can drag the map while drawing if necessary. Roads, and many other types of lines, are part of a larger network. It is important for these lines to be connected properly in order for routing applications to work. **Click on Flower Street, to create an intersection connecting the two lines.**",
            "finish": "Lines can be finished by clicking on the last node again. **Finish drawing the road.**",
            "road": "**Select Road from the grid**",
            "residential": "There are different types of roads, the most common of which is Residential. **Choose the Residential road type**",
            "describe": "**Name the road and close the feature editor.**",
            "restart": "The road needs to intersect Flower Street."
        },
        "startediting": {
            "help": "More documentation and this walkthrough are available here.",
            "save": "Don't forget to regularly save your changes!",
            "start": "Start mapping!"
        }
    },
    "presets": {
        "fields": {
            "access": {
                "label": "Access",
                "types": {
                    "access": "General",
                    "foot": "Foot",
                    "motor_vehicle": "Motor Vehicles",
                    "bicycle": "Bicycles",
                    "horse": "Horses"
                },
                "options": {
                    "yes": {
                        "title": "Allowed",
                        "description": "Access permitted by law; a right of way"
                    },
                    "no": {
                        "title": "Prohibited",
                        "description": "Access not permitted to the general public"
                    },
                    "permissive": {
                        "title": "Permissive",
                        "description": "Access permitted until such time as the owner revokes the permission"
                    },
                    "private": {
                        "title": "Private",
                        "description": "Access permitted only with permission of the owner on an individual basis"
                    },
                    "designated": {
                        "title": "Designated",
                        "description": "Access permitted according to signs or specific local laws"
                    },
                    "destination": {
                        "title": "Destination",
                        "description": "Access permitted only to reach a destination"
                    }
                }
            },
            "address": {
                "label": "Address",
                "placeholders": {
                    "housename": "Housename",
                    "number": "123",
                    "street": "Street",
                    "city": "City"
                }
            },
            "admin_level": {
                "label": "Admin Level"
            },
            "aeroway": {
                "label": "Type"
            },
            "amenity": {
                "label": "Type"
            },
            "atm": {
                "label": "ATM"
            },
            "barrier": {
                "label": "Type"
            },
            "bicycle_parking": {
                "label": "Type"
            },
            "building": {
                "label": "Building"
            },
            "building_area": {
                "label": "Building"
            },
            "building_yes": {
                "label": "Building"
            },
            "capacity": {
                "label": "Capacity"
            },
            "collection_times": {
                "label": "Collection Times"
            },
            "construction": {
                "label": "Type"
            },
            "country": {
                "label": "Country"
            },
            "crossing": {
                "label": "Type"
            },
            "cuisine": {
                "label": "Cuisine"
            },
            "denomination": {
                "label": "Denomination"
            },
            "denotation": {
                "label": "Denotation"
            },
            "elevation": {
                "label": "Elevation"
            },
            "emergency": {
                "label": "Emergency"
            },
            "entrance": {
                "label": "Type"
            },
            "fax": {
                "label": "Fax"
            },
            "fee": {
                "label": "Fee"
            },
            "highway": {
                "label": "Type"
            },
            "historic": {
                "label": "Type"
            },
            "internet_access": {
                "label": "Internet Access",
                "options": {
                    "yes": "Yes",
                    "no": "No",
                    "wlan": "Wifi",
                    "wired": "Wired",
                    "terminal": "Terminal"
                }
            },
            "landuse": {
                "label": "Type"
            },
            "layer": {
                "label": "Layer"
            },
            "leisure": {
                "label": "Type"
            },
            "levels": {
                "label": "Levels"
            },
            "man_made": {
                "label": "Type"
            },
            "maxspeed": {
                "label": "Speed Limit"
            },
            "name": {
                "label": "Name"
            },
            "natural": {
                "label": "Natural"
            },
            "network": {
                "label": "Network"
            },
            "note": {
                "label": "Note"
            },
            "office": {
                "label": "Type"
            },
            "oneway": {
                "label": "One Way"
            },
            "oneway_yes": {
                "label": "One Way"
            },
            "opening_hours": {
                "label": "Hours"
            },
            "operator": {
                "label": "Operator"
            },
            "park_ride": {
                "label": "Park and Ride"
            },
            "parking": {
                "label": "Type"
            },
            "phone": {
                "label": "Phone"
            },
            "place": {
                "label": "Type"
            },
            "power": {
                "label": "Type"
            },
            "railway": {
                "label": "Type"
            },
            "ref": {
                "label": "Reference"
            },
            "religion": {
                "label": "Religion",
                "options": {
                    "christian": "Christian",
                    "muslim": "Muslim",
                    "buddhist": "Buddhist",
                    "jewish": "Jewish",
                    "hindu": "Hindu",
                    "shinto": "Shinto",
                    "taoist": "Taoist"
                }
            },
            "service": {
                "label": "Type"
            },
            "shelter": {
                "label": "Shelter"
            },
            "shop": {
                "label": "Type"
            },
            "source": {
                "label": "Source"
            },
            "sport": {
                "label": "Sport"
            },
            "structure": {
                "label": "Structure",
                "options": {
                    "bridge": "Bridge",
                    "tunnel": "Tunnel",
                    "embankment": "Embankment",
                    "cutting": "Cutting"
                }
            },
            "supervised": {
                "label": "Supervised"
            },
            "surface": {
                "label": "Surface"
            },
            "tourism": {
                "label": "Type"
            },
            "tracktype": {
                "label": "Type"
            },
            "water": {
                "label": "Type"
            },
            "waterway": {
                "label": "Type"
            },
            "website": {
                "label": "Website"
            },
            "wetland": {
                "label": "Type"
            },
            "wheelchair": {
                "label": "Wheelchair Access"
            },
            "wikipedia": {
                "label": "Wikipedia"
            },
            "wood": {
                "label": "Type"
            }
        },
        "presets": {
            "aeroway": {
                "name": "Aeroway",
                "terms": ""
            },
            "aeroway/aerodrome": {
                "name": "Airport",
                "terms": "airplane,airport,aerodrome"
            },
            "aeroway/helipad": {
                "name": "Helipad",
                "terms": "helicopter,helipad,heliport"
            },
            "amenity": {
                "name": "Amenity",
                "terms": ""
            },
            "amenity/bank": {
                "name": "Bank",
                "terms": "coffer,countinghouse,credit union,depository,exchequer,fund,hoard,investment firm,repository,reserve,reservoir,safe,savings,stock,stockpile,store,storehouse,thrift,treasury,trust company,vault"
            },
            "amenity/bar": {
                "name": "Bar",
                "terms": ""
            },
            "amenity/bench": {
                "name": "Bench",
                "terms": ""
            },
            "amenity/bicycle_parking": {
                "name": "Bicycle Parking",
                "terms": ""
            },
            "amenity/bicycle_rental": {
                "name": "Bicycle Rental",
                "terms": ""
            },
            "amenity/cafe": {
                "name": "Cafe",
                "terms": "coffee,tea,coffee shop"
            },
            "amenity/cinema": {
                "name": "Cinema",
                "terms": "big screen,bijou,cine,drive-in,film,flicks,motion pictures,movie house,movie theater,moving pictures,nabes,photoplay,picture show,pictures,playhouse,show,silver screen"
            },
            "amenity/courthouse": {
                "name": "Courthouse",
                "terms": ""
            },
            "amenity/embassy": {
                "name": "Embassy",
                "terms": ""
            },
            "amenity/fast_food": {
                "name": "Fast Food",
                "terms": ""
            },
            "amenity/fire_station": {
                "name": "Fire Station",
                "terms": ""
            },
            "amenity/fuel": {
                "name": "Gas Station",
                "terms": ""
            },
            "amenity/grave_yard": {
                "name": "Graveyard",
                "terms": ""
            },
            "amenity/hospital": {
                "name": "Hospital",
                "terms": "clinic,emergency room,health service,hospice,infirmary,institution,nursing home,rest home,sanatorium,sanitarium,sick bay,surgery,ward"
            },
            "amenity/library": {
                "name": "Library",
                "terms": ""
            },
            "amenity/marketplace": {
                "name": "Marketplace",
                "terms": ""
            },
            "amenity/parking": {
                "name": "Parking",
                "terms": ""
            },
            "amenity/pharmacy": {
                "name": "Pharmacy",
                "terms": ""
            },
            "amenity/place_of_worship": {
                "name": "Place of Worship",
                "terms": "abbey,basilica,bethel,cathedral,chancel,chantry,chapel,church,fold,house of God,house of prayer,house of worship,minster,mission,mosque,oratory,parish,sacellum,sanctuary,shrine,synagogue,tabernacle,temple"
            },
            "amenity/place_of_worship/christian": {
                "name": "Church",
                "terms": "christian,abbey,basilica,bethel,cathedral,chancel,chantry,chapel,church,fold,house of God,house of prayer,house of worship,minster,mission,oratory,parish,sacellum,sanctuary,shrine,tabernacle,temple"
            },
            "amenity/place_of_worship/jewish": {
                "name": "Synagogue",
                "terms": "jewish,synagogue"
            },
            "amenity/place_of_worship/muslim": {
                "name": "Mosque",
                "terms": "muslim,mosque"
            },
            "amenity/police": {
                "name": "Police",
                "terms": "badge,bear,blue,bluecoat,bobby,boy scout,bull,constable,constabulary,cop,copper,corps,county mounty,detective,fed,flatfoot,force,fuzz,gendarme,gumshoe,heat,law,law enforcement,man,narc,officers,patrolman,police"
            },
            "amenity/post_box": {
                "name": "Mailbox",
                "terms": "letter drop,letterbox,mail drop,mailbox,pillar box,postbox"
            },
            "amenity/post_office": {
                "name": "Post Office",
                "terms": ""
            },
            "amenity/pub": {
                "name": "Pub",
                "terms": ""
            },
            "amenity/restaurant": {
                "name": "Restaurant",
                "terms": "bar,cafeteria,café,canteen,chophouse,coffee shop,diner,dining room,dive*,doughtnut shop,drive-in,eatery,eating house,eating place,fast-food place,greasy spoon,grill,hamburger stand,hashery,hideaway,hotdog stand,inn,joint*,luncheonette,lunchroom,night club,outlet*,pizzeria,saloon,soda fountain,watering hole"
            },
            "amenity/school": {
                "name": "School",
                "terms": "academy,alma mater,blackboard,college,department,discipline,establishment,faculty,hall,halls of ivy,institute,institution,jail*,schoolhouse,seminary,university"
            },
            "amenity/swimming_pool": {
                "name": "Swimming Pool",
                "terms": ""
            },
            "amenity/telephone": {
                "name": "Telephone",
                "terms": ""
            },
            "amenity/theatre": {
                "name": "Theater",
                "terms": "theatre,performance,play,musical"
            },
            "amenity/toilets": {
                "name": "Toilets",
                "terms": ""
            },
            "amenity/townhall": {
                "name": "Town Hall",
                "terms": "village hall,city government,courthouse,municipal building,municipal center"
            },
            "amenity/university": {
                "name": "University",
                "terms": ""
            },
            "barrier": {
                "name": "Barrier",
                "terms": ""
            },
            "barrier/block": {
                "name": "Block",
                "terms": ""
            },
            "barrier/bollard": {
                "name": "Bollard",
                "terms": ""
            },
            "barrier/cattle_grid": {
                "name": "Cattle Grid",
                "terms": ""
            },
            "barrier/city_wall": {
                "name": "City Wall",
                "terms": ""
            },
            "barrier/cycle_barrier": {
                "name": "Cycle Barrier",
                "terms": ""
            },
            "barrier/ditch": {
                "name": "Ditch",
                "terms": ""
            },
            "barrier/entrance": {
                "name": "Entrance",
                "terms": ""
            },
            "barrier/fence": {
                "name": "Fence",
                "terms": ""
            },
            "barrier/gate": {
                "name": "Gate",
                "terms": ""
            },
            "barrier/hedge": {
                "name": "Hedge",
                "terms": ""
            },
            "barrier/kissing_gate": {
                "name": "Kissing Gate",
                "terms": ""
            },
            "barrier/lift_gate": {
                "name": "Lift Gate",
                "terms": ""
            },
            "barrier/retaining_wall": {
                "name": "Retaining Wall",
                "terms": ""
            },
            "barrier/stile": {
                "name": "Stile",
                "terms": ""
            },
            "barrier/toll_booth": {
                "name": "Toll Booth",
                "terms": ""
            },
            "barrier/wall": {
                "name": "Wall",
                "terms": ""
            },
            "boundary/administrative": {
                "name": "Administrative Boundary",
                "terms": ""
            },
            "building": {
                "name": "Building",
                "terms": ""
            },
            "building/apartments": {
                "name": "Apartments",
                "terms": ""
            },
            "building/entrance": {
                "name": "Entrance",
                "terms": ""
            },
            "building/house": {
                "name": "House",
                "terms": ""
            },
            "entrance": {
                "name": "Entrance",
                "terms": ""
            },
            "highway": {
                "name": "Highway",
                "terms": ""
            },
            "highway/bridleway": {
                "name": "Bridle Path",
                "terms": "bridleway,equestrian trail,horse riding path,bridle road,horse trail"
            },
            "highway/bus_stop": {
                "name": "Bus Stop",
                "terms": ""
            },
            "highway/crossing": {
                "name": "Crossing",
                "terms": "crosswalk,zebra crossing"
            },
            "highway/cycleway": {
                "name": "Cycle Path",
                "terms": ""
            },
            "highway/footway": {
                "name": "Foot Path",
                "terms": "beaten path,boulevard,clearing,course,cut*,drag*,footpath,highway,lane,line,orbit,passage,pathway,rail,rails,road,roadway,route,street,thoroughfare,trackway,trail,trajectory,walk"
            },
            "highway/motorway": {
                "name": "Motorway",
                "terms": ""
            },
            "highway/motorway_link": {
                "name": "Motorway Link",
                "terms": "ramp,on ramp,off ramp"
            },
            "highway/path": {
                "name": "Path",
                "terms": ""
            },
            "highway/primary": {
                "name": "Primary Road",
                "terms": ""
            },
            "highway/primary_link": {
                "name": "Primary Link",
                "terms": "ramp,on ramp,off ramp"
            },
            "highway/residential": {
                "name": "Residential Road",
                "terms": ""
            },
            "highway/road": {
                "name": "Unknown Road",
                "terms": ""
            },
            "highway/secondary": {
                "name": "Secondary Road",
                "terms": ""
            },
            "highway/secondary_link": {
                "name": "Secondary Link",
                "terms": "ramp,on ramp,off ramp"
            },
            "highway/service": {
                "name": "Service Road",
                "terms": ""
            },
            "highway/steps": {
                "name": "Steps",
                "terms": "stairs,staircase"
            },
            "highway/tertiary": {
                "name": "Tertiary Road",
                "terms": ""
            },
            "highway/tertiary_link": {
                "name": "Tertiary Link",
                "terms": "ramp,on ramp,off ramp"
            },
            "highway/track": {
                "name": "Track",
                "terms": ""
            },
            "highway/traffic_signals": {
                "name": "Traffic Signals",
                "terms": "light,stoplight,traffic light"
            },
            "highway/trunk": {
                "name": "Trunk Road",
                "terms": ""
            },
            "highway/trunk_link": {
                "name": "Trunk Link",
                "terms": "ramp,on ramp,off ramp"
            },
            "highway/turning_circle": {
                "name": "Turning Circle",
                "terms": ""
            },
            "highway/unclassified": {
                "name": "Unclassified Road",
                "terms": ""
            },
            "historic": {
                "name": "Historic Site",
                "terms": ""
            },
            "historic/archaeological_site": {
                "name": "Archaeological Site",
                "terms": ""
            },
            "historic/boundary_stone": {
                "name": "Boundary Stone",
                "terms": ""
            },
            "historic/castle": {
                "name": "Castle",
                "terms": ""
            },
            "historic/memorial": {
                "name": "Memorial",
                "terms": ""
            },
            "historic/monument": {
                "name": "Monument",
                "terms": ""
            },
            "historic/ruins": {
                "name": "Ruins",
                "terms": ""
            },
            "historic/wayside_cross": {
                "name": "Wayside Cross",
                "terms": ""
            },
            "historic/wayside_shrine": {
                "name": "Wayside Shrine",
                "terms": ""
            },
            "landuse": {
                "name": "Landuse",
                "terms": ""
            },
            "landuse/allotments": {
                "name": "Allotments",
                "terms": ""
            },
            "landuse/basin": {
                "name": "Basin",
                "terms": ""
            },
            "landuse/cemetery": {
                "name": "Cemetery",
                "terms": ""
            },
            "landuse/commercial": {
                "name": "Commercial",
                "terms": ""
            },
            "landuse/construction": {
                "name": "Construction",
                "terms": ""
            },
            "landuse/farm": {
                "name": "Farm",
                "terms": ""
            },
            "landuse/farmyard": {
                "name": "Farmyard",
                "terms": ""
            },
            "landuse/forest": {
                "name": "Forest",
                "terms": ""
            },
            "landuse/grass": {
                "name": "Grass",
                "terms": ""
            },
            "landuse/industrial": {
                "name": "Industrial",
                "terms": ""
            },
            "landuse/meadow": {
                "name": "Meadow",
                "terms": ""
            },
            "landuse/orchard": {
                "name": "Orchard",
                "terms": ""
            },
            "landuse/quarry": {
                "name": "Quarry",
                "terms": ""
            },
            "landuse/residential": {
                "name": "Residential",
                "terms": ""
            },
            "landuse/vineyard": {
                "name": "Vineyard",
                "terms": ""
            },
            "leisure": {
                "name": "Leisure",
                "terms": ""
            },
            "leisure/garden": {
                "name": "Garden",
                "terms": ""
            },
            "leisure/golf_course": {
                "name": "Golf Course",
                "terms": ""
            },
            "leisure/marina": {
                "name": "Marina",
                "terms": ""
            },
            "leisure/park": {
                "name": "Park",
                "terms": "esplanade,estate,forest,garden,grass,green,grounds,lawn,lot,meadow,parkland,place,playground,plaza,pleasure garden,recreation area,square,tract,village green,woodland"
            },
            "leisure/pitch": {
                "name": "Sport Pitch",
                "terms": ""
            },
            "leisure/pitch/american_football": {
                "name": "American Football Field",
                "terms": ""
            },
            "leisure/pitch/baseball": {
                "name": "Baseball Diamond",
                "terms": ""
            },
            "leisure/pitch/basketball": {
                "name": "Basketball Court",
                "terms": ""
            },
            "leisure/pitch/soccer": {
                "name": "Soccer Field",
                "terms": ""
            },
            "leisure/pitch/tennis": {
                "name": "Tennis Court",
                "terms": ""
            },
            "leisure/playground": {
                "name": "Playground",
                "terms": ""
            },
            "leisure/slipway": {
                "name": "Slipway",
                "terms": ""
            },
            "leisure/stadium": {
                "name": "Stadium",
                "terms": ""
            },
            "leisure/swimming_pool": {
                "name": "Swimming Pool",
                "terms": ""
            },
            "man_made": {
                "name": "Man Made",
                "terms": ""
            },
            "man_made/lighthouse": {
                "name": "Lighthouse",
                "terms": ""
            },
            "man_made/pier": {
                "name": "Pier",
                "terms": ""
            },
            "man_made/survey_point": {
                "name": "Survey Point",
                "terms": ""
            },
            "man_made/wastewater_plant": {
                "name": "Wastewater Plant",
                "terms": "sewage works,sewage treatment plant,water treatment plant,reclamation plant"
            },
            "man_made/water_tower": {
                "name": "Water Tower",
                "terms": ""
            },
            "man_made/water_works": {
                "name": "Water Works",
                "terms": ""
            },
            "natural": {
                "name": "Natural",
                "terms": ""
            },
            "natural/bay": {
                "name": "Bay",
                "terms": ""
            },
            "natural/beach": {
                "name": "Beach",
                "terms": ""
            },
            "natural/cliff": {
                "name": "Cliff",
                "terms": ""
            },
            "natural/coastline": {
                "name": "Coastline",
                "terms": "shore"
            },
            "natural/glacier": {
                "name": "Glacier",
                "terms": ""
            },
            "natural/grassland": {
                "name": "Grassland",
                "terms": ""
            },
            "natural/heath": {
                "name": "Heath",
                "terms": ""
            },
            "natural/peak": {
                "name": "Peak",
                "terms": "acme,aiguille,alp,climax,crest,crown,hill,mount,mountain,pinnacle,summit,tip,top"
            },
            "natural/scrub": {
                "name": "Scrub",
                "terms": ""
            },
            "natural/spring": {
                "name": "Spring",
                "terms": ""
            },
            "natural/tree": {
                "name": "Tree",
                "terms": ""
            },
            "natural/water": {
                "name": "Water",
                "terms": ""
            },
            "natural/water/lake": {
                "name": "Lake",
                "terms": "lakelet,loch,mere"
            },
            "natural/water/pond": {
                "name": "Pond",
                "terms": "lakelet,millpond,tarn,pool,mere"
            },
            "natural/water/reservoir": {
                "name": "Reservoir",
                "terms": ""
            },
            "natural/wetland": {
                "name": "Wetland",
                "terms": ""
            },
            "natural/wood": {
                "name": "Wood",
                "terms": ""
            },
            "office": {
                "name": "Office",
                "terms": ""
            },
            "other": {
                "name": "Other",
                "terms": ""
            },
            "other_area": {
                "name": "Other",
                "terms": ""
            },
            "place": {
                "name": "Place",
                "terms": ""
            },
            "place/city": {
                "name": "City",
                "terms": ""
            },
            "place/hamlet": {
                "name": "Hamlet",
                "terms": ""
            },
            "place/island": {
                "name": "Island",
                "terms": "archipelago,atoll,bar,cay,isle,islet,key,reef"
            },
            "place/isolated_dwelling": {
                "name": "Isolated Dwelling",
                "terms": ""
            },
            "place/locality": {
                "name": "Locality",
                "terms": ""
            },
            "place/town": {
                "name": "Town",
                "terms": ""
            },
            "place/village": {
                "name": "Village",
                "terms": ""
            },
            "power": {
                "name": "Power",
                "terms": ""
            },
            "power/generator": {
                "name": "Power Plant",
                "terms": ""
            },
            "power/line": {
                "name": "Power Line",
                "terms": ""
            },
            "power/pole": {
                "name": "Power Pole",
                "terms": ""
            },
            "power/sub_station": {
                "name": "Substation",
                "terms": ""
            },
            "power/tower": {
                "name": "High-Voltage Tower",
                "terms": ""
            },
            "power/transformer": {
                "name": "Transformer",
                "terms": ""
            },
            "railway": {
                "name": "Railway",
                "terms": ""
            },
            "railway/abandoned": {
                "name": "Abandoned Railway",
                "terms": ""
            },
            "railway/disused": {
                "name": "Disused Railway",
                "terms": ""
            },
            "railway/level_crossing": {
                "name": "Level Crossing",
                "terms": "crossing,railroad crossing,railway crossing,grade crossing,road through railroad,train crossing"
            },
            "railway/monorail": {
                "name": "Monorail",
                "terms": ""
            },
            "railway/rail": {
                "name": "Rail",
                "terms": ""
            },
            "railway/station": {
                "name": "Railway Station",
                "terms": ""
            },
            "railway/subway": {
                "name": "Subway",
                "terms": ""
            },
            "railway/subway_entrance": {
                "name": "Subway Entrance",
                "terms": ""
            },
            "railway/tram": {
                "name": "Tram",
                "terms": "streetcar"
            },
            "shop": {
                "name": "Shop",
                "terms": ""
            },
            "shop/alcohol": {
                "name": "Liquor Store",
                "terms": ""
            },
            "shop/bakery": {
                "name": "Bakery",
                "terms": ""
            },
            "shop/beauty": {
                "name": "Beauty Shop",
                "terms": ""
            },
            "shop/beverages": {
                "name": "Beverage Store",
                "terms": ""
            },
            "shop/bicycle": {
                "name": "Bicycle Shop",
                "terms": ""
            },
            "shop/books": {
                "name": "Bookstore",
                "terms": ""
            },
            "shop/boutique": {
                "name": "Boutique",
                "terms": ""
            },
            "shop/butcher": {
                "name": "Butcher",
                "terms": ""
            },
            "shop/car": {
                "name": "Car Dealership",
                "terms": ""
            },
            "shop/car_parts": {
                "name": "Car Parts Store",
                "terms": ""
            },
            "shop/car_repair": {
                "name": "Car Repair Shop",
                "terms": ""
            },
            "shop/chemist": {
                "name": "Chemist",
                "terms": ""
            },
            "shop/clothes": {
                "name": "Clothing Store",
                "terms": ""
            },
            "shop/computer": {
                "name": "Computer Store",
                "terms": ""
            },
            "shop/confectionery": {
                "name": "Confectionery",
                "terms": ""
            },
            "shop/convenience": {
                "name": "Convenience Store",
                "terms": ""
            },
            "shop/deli": {
                "name": "Deli",
                "terms": ""
            },
            "shop/department_store": {
                "name": "Department Store",
                "terms": ""
            },
            "shop/doityourself": {
                "name": "DIY Store",
                "terms": ""
            },
            "shop/dry_cleaning": {
                "name": "Dry Cleaners",
                "terms": ""
            },
            "shop/electronics": {
                "name": "Electronics Store",
                "terms": ""
            },
            "shop/fishmonger": {
                "name": "Fishmonger",
                "terms": ""
            },
            "shop/florist": {
                "name": "Florist",
                "terms": ""
            },
            "shop/furniture": {
                "name": "Furniture Store",
                "terms": ""
            },
            "shop/garden_centre": {
                "name": "Garden Center",
                "terms": ""
            },
            "shop/gift": {
                "name": "Gift Shop",
                "terms": ""
            },
            "shop/greengrocer": {
                "name": "Greengrocer",
                "terms": ""
            },
            "shop/hairdresser": {
                "name": "Hairdresser",
                "terms": ""
            },
            "shop/hardware": {
                "name": "Hardware Store",
                "terms": ""
            },
            "shop/hifi": {
                "name": "Hifi Store",
                "terms": ""
            },
            "shop/jewelry": {
                "name": "Jeweler",
                "terms": ""
            },
            "shop/kiosk": {
                "name": "Kiosk",
                "terms": ""
            },
            "shop/laundry": {
                "name": "Laundry",
                "terms": ""
            },
            "shop/mall": {
                "name": "Mall",
                "terms": ""
            },
            "shop/mobile_phone": {
                "name": "Mobile Phone Store",
                "terms": ""
            },
            "shop/motorcycle": {
                "name": "Motorcycle Dealership",
                "terms": ""
            },
            "shop/music": {
                "name": "Music Store",
                "terms": ""
            },
            "shop/newsagent": {
                "name": "Newsagent",
                "terms": ""
            },
            "shop/optician": {
                "name": "Optician",
                "terms": ""
            },
            "shop/outdoor": {
                "name": "Outdoor Store",
                "terms": ""
            },
            "shop/pet": {
                "name": "Pet Store",
                "terms": ""
            },
            "shop/shoes": {
                "name": "Shoe Store",
                "terms": ""
            },
            "shop/sports": {
                "name": "Sporting Goods Store",
                "terms": ""
            },
            "shop/stationery": {
                "name": "Stationery Store",
                "terms": ""
            },
            "shop/supermarket": {
                "name": "Supermarket",
                "terms": "bazaar,boutique,chain,co-op,cut-rate store,discount store,five-and-dime,flea market,galleria,mall,mart,outlet,outlet store,shop,shopping center,shopping plaza,stand,store,supermarket,thrift shop"
            },
            "shop/toys": {
                "name": "Toy Store",
                "terms": ""
            },
            "shop/travel_agency": {
                "name": "Travel Agency",
                "terms": ""
            },
            "shop/tyres": {
                "name": "Tire Store",
                "terms": ""
            },
            "shop/vacant": {
                "name": "Vacant Shop",
                "terms": ""
            },
            "shop/variety_store": {
                "name": "Variety Store",
                "terms": ""
            },
            "shop/video": {
                "name": "Video Store",
                "terms": ""
            },
            "tourism": {
                "name": "Tourism",
                "terms": ""
            },
            "tourism/alpine_hut": {
                "name": "Alpine Hut",
                "terms": ""
            },
            "tourism/artwork": {
                "name": "Artwork",
                "terms": ""
            },
            "tourism/attraction": {
                "name": "Tourist Attraction",
                "terms": ""
            },
            "tourism/camp_site": {
                "name": "Camp Site",
                "terms": ""
            },
            "tourism/caravan_site": {
                "name": "RV Park",
                "terms": ""
            },
            "tourism/chalet": {
                "name": "Chalet",
                "terms": ""
            },
            "tourism/guest_house": {
                "name": "Guest House",
                "terms": "B&B,Bed & Breakfast,Bed and Breakfast"
            },
            "tourism/hostel": {
                "name": "Hostel",
                "terms": ""
            },
            "tourism/hotel": {
                "name": "Hotel",
                "terms": ""
            },
            "tourism/information": {
                "name": "Information",
                "terms": ""
            },
            "tourism/motel": {
                "name": "Motel",
                "terms": ""
            },
            "tourism/museum": {
                "name": "Museum",
                "terms": "exhibition,exhibits archive,foundation,gallery,hall,institution,library,menagerie,repository,salon,storehouse,treasury,vault"
            },
            "tourism/picnic_site": {
                "name": "Picnic Site",
                "terms": ""
            },
            "tourism/theme_park": {
                "name": "Theme Park",
                "terms": ""
            },
            "tourism/viewpoint": {
                "name": "Viewpoint",
                "terms": ""
            },
            "tourism/zoo": {
                "name": "Zoo",
                "terms": ""
            },
            "waterway": {
                "name": "Waterway",
                "terms": ""
            },
            "waterway/canal": {
                "name": "Canal",
                "terms": ""
            },
            "waterway/dam": {
                "name": "Dam",
                "terms": ""
            },
            "waterway/ditch": {
                "name": "Ditch",
                "terms": ""
            },
            "waterway/drain": {
                "name": "Drain",
                "terms": ""
            },
            "waterway/river": {
                "name": "River",
                "terms": "beck,branch,brook,course,creek,estuary,rill,rivulet,run,runnel,stream,tributary,watercourse"
            },
            "waterway/riverbank": {
                "name": "Riverbank",
                "terms": ""
            },
            "waterway/stream": {
                "name": "Stream",
                "terms": "beck,branch,brook,burn,course,creek,current,drift,flood,flow,freshet,race,rill,rindle,rivulet,run,runnel,rush,spate,spritz,surge,tide,torrent,tributary,watercourse"
            },
            "waterway/weir": {
                "name": "Weir",
                "terms": ""
            }
        }
    }
};