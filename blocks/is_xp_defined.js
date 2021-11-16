module.exports = {
    name: "Is XP Defined? (Data)",

    description: "Checks if the XP has been defined",

    category: "Easy Levels",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Description: Executes this block.",
            "types": ["action"],
            "required": true
        },
        {
            "id": "name",
            "name": "Data name of XP",
            "description": "Description: The name of the XP (data)",
            "types": ["text", "unspecified"],
            "required": true
        },
        {
            "id": "target",
            "name": "Member",
            "description": "Description: The member to check the defined (or undefined) XP of",
            "types": ["object", "text", "unspecified"]
        }
    ],

    options: [],

    outputs: [
        {
            "id": "action1",
            "name": "Action (If True)",
            "description": "Type: Action\n\nDescription: Executes the following blocks if true.",
            "types": ["action"]
        },
        {
            "id": "action2",
            "name": "Action (If False)",
            "description": "Type: Action\n\nDescription: Executes the following blocks if false.",
            "types": ["action"]
        }
    ],

    code(cache) {
    const name = this.GetInputValue("name", cache) + "";
    const target = this.GetInputValue("target", cache);
    const data = this.getData(name, typeof target == "object" ? target.id : target, "member");

    if ((typeof data !== 'undefined') &&(typeof data !== null) && (!isNaN(data))) {
        this.RunNextBlock("action1", cache);
     } else {
        this.RunNextBlock("action2", cache);
     }
    }
}