# jquery-multicolumn-dropdown

- Version: 0.1
- Woking-Status Failed

## About:
This Project ist a simple jquery-extension to ensure a dynamic way for displaying a dropdown-box with multiple columns for each row.

## Get Started:

```html
<link href="/css/jquery.multicolumn-dropdown.css" rel="stylesheet">
<script src="//code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="/js/jquery.multicolumn-dropdown.js"></script>
```

## How to use with Data from the DOM-Object itself:
html-Base:
```html
<select id="demo">
    <option value="testValue1" mg-description="This is a Test - 1">Test - 1</option>
    <option value="testValue2" mg-description="This is a Test - 2">Test - 2</option>
    <option value="testValue3" mg-description="This is a Test - 3">Test - 3</option>
</select>
```

> Note: The Libary is desined to suite even a browser without javascript activated. That means, that thise Select-Object can be used without modifyng it too much:
- $("option").val(); is used for structure.value
- $("option").html(); is used for structure.text

Every other structure-element is used as mg-**** attribute on the option-element.

> Note: Value and Text are not mandatory, the structure array determines which rows will be evaluated and shown

js-Base:
```js
$('#demo').multiColumnDropDown({
    structure:[
        {name:'value',text:'Value'},
        {name:'text',text:'Title'},
        {name:'description',text:'Description'}
    ]
});
```

## How to use with Data from js:
html-base:
```html
<input id="demo" value="This is a Test">
```

js-base:
```js
$('#demo').multiColumnDropDown({
    domDriven: false,
    data:[
        {value:"testValue1", text: 'Test - 1', description: "This is a Test - 1"},
        {value:"testValue2", text: 'Test - 2', description: "This is a Test - 2"},
        {value:"testValue3", text: 'Test - 3', description: "This is a Test - 3"}
    ],
    structure:[
        {name:'value',text:'Value'},
        {name:'text',text:'Title'},
        {name:'description',text:'Description'}
    ],
    showHead: true,
    fieldText : 'text',
    fieldValue: 'value'
});
```

## Config-Fields:
> Coming soon