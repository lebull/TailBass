export const schema = {
    "models": {},
    "enums": {
        "ModelAttributeTypes": {
            "name": "ModelAttributeTypes",
            "values": [
                "binary",
                "binarySet",
                "bool",
                "list",
                "map",
                "number",
                "numberSet",
                "string",
                "stringSet",
                "_null"
            ]
        },
        "EventStatus": {
            "name": "EventStatus",
            "values": [
                "DRAFT",
                "ACTIVE",
                "CANCELED"
            ]
        },
        "ModelSortDirection": {
            "name": "ModelSortDirection",
            "values": [
                "ASC",
                "DESC"
            ]
        },
        "EventAssignmentStatus": {
            "name": "EventAssignmentStatus",
            "values": [
                "DJACCEPTED",
                "HOSTACCEPTED",
                "APPROVED"
            ]
        }
    },
    "nonModels": {
        "ModelProfileConnection": {
            "name": "ModelProfileConnection",
            "fields": {
                "items": {
                    "name": "items",
                    "isArray": true,
                    "type": {
                        "nonModel": "Profile"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "nextToken": {
                    "name": "nextToken",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "startedAt": {
                    "name": "startedAt",
                    "isArray": false,
                    "type": "AWSTimestamp",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "Profile": {
            "name": "Profile",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "owner": {
                    "name": "owner",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "djname": {
                    "name": "djname",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "genre": {
                    "name": "genre",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "_version": {
                    "name": "_version",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "_deleted": {
                    "name": "_deleted",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "_lastChangedAt": {
                    "name": "_lastChangedAt",
                    "isArray": false,
                    "type": "AWSTimestamp",
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "EventAssignments": {
                    "name": "EventAssignments",
                    "isArray": false,
                    "type": {
                        "nonModel": "ModelEventAssignmentConnection"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ModelEventAssignmentConnection": {
            "name": "ModelEventAssignmentConnection",
            "fields": {
                "items": {
                    "name": "items",
                    "isArray": true,
                    "type": {
                        "nonModel": "EventAssignment"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "nextToken": {
                    "name": "nextToken",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "startedAt": {
                    "name": "startedAt",
                    "isArray": false,
                    "type": "AWSTimestamp",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "EventAssignment": {
            "name": "EventAssignment",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": {
                        "enum": "EventStatus"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "slotNumber": {
                    "name": "slotNumber",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "profileID": {
                    "name": "profileID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "eventID": {
                    "name": "eventID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "_version": {
                    "name": "_version",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "_deleted": {
                    "name": "_deleted",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "_lastChangedAt": {
                    "name": "_lastChangedAt",
                    "isArray": false,
                    "type": "AWSTimestamp",
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "Profile": {
                    "name": "Profile",
                    "isArray": false,
                    "type": {
                        "nonModel": "Profile"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "Event": {
            "name": "Event",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "startDateTime": {
                    "name": "startDateTime",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "hostUserName": {
                    "name": "hostUserName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "numslots": {
                    "name": "numslots",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": {
                        "enum": "EventStatus"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "_version": {
                    "name": "_version",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "_deleted": {
                    "name": "_deleted",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "_lastChangedAt": {
                    "name": "_lastChangedAt",
                    "isArray": false,
                    "type": "AWSTimestamp",
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "EventAssignments": {
                    "name": "EventAssignments",
                    "isArray": false,
                    "type": {
                        "nonModel": "ModelEventAssignmentConnection"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ModelEventConnection": {
            "name": "ModelEventConnection",
            "fields": {
                "items": {
                    "name": "items",
                    "isArray": true,
                    "type": {
                        "nonModel": "Event"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "nextToken": {
                    "name": "nextToken",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "startedAt": {
                    "name": "startedAt",
                    "isArray": false,
                    "type": "AWSTimestamp",
                    "isRequired": false,
                    "attributes": []
                }
            }
        }
    },
    "version": "1987f70ce68afdbc3b86268d29130fdb"
};