({
    name: "Matrix", // Category Name
    description: "Led Matrix 5x5",
    author: "BeeBlock",
    category: "Display",
    version: "1.0.0",
    icon: "/static/matrix.png", // Category icon
    color: "#005873", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        "matrix_display_custom",
        "matrix_off",
        "matrix_clear",
        "matrix_show",
    //                        "matrix_color",
        {
            xml: `
                <block type="matrix_color">
                    <value name="color">
                        <shadow type="math_number">
                            <field name="NUM">100</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="matrix_text">
                    <value name="message">
                        <shadow type="text">
                            <field name="TEXT">Hello</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="matrix_digit">
                    <value name="digit">
                        <shadow type="math_number">
                            <field name="NUM">1</field>
                        </shadow>
                    </value>
                </block>
            `
        },
    ]
});