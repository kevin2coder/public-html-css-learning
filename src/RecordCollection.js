/*
Create a update records function where you pass in 3 arguments: ID, Prop, Value.
Update collection | Log Old Collection, Then New Collection
If Value is empty then completly delete that property
If updating "tracks" have it add too end of "tracks" instead of replacing previous "tracks"

var collectionCopy = JSON.parse(JSON.stringify(collection));
*/
var collection = {
    "2548": {
        "alblum": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let it Rock",
            "You Give Love a Bad Name",
        ]
    },
    "2468": {
        "alblum": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "",
        "tracks": []
    },
    "5439": {
        "alblum": "ABBA Gold"
    }
}
