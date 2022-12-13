import icons from "../icons/index";
import "./editor.scss";

const {registerBlockType} = wp.blocks;
const {__} = wp.i18n;
const {InspectorControls, BlockControls, AlignmentToolbar, BlockAlignmentToolbar } = wp.blockEditor;
const {PanelBody, PanelRow, TextControl, SelectControl} = wp.components;

registerBlockType('udemy/recipe', {
title: __("Recipe",'recipe'),
description: __("Provide a short summaty of a recipe ",'recipe'),
category: 'common',
icon:  icons.wapuu ,
keywords : [
    __('Food', 'recipe'),
    __('Meal Type', 'recipe')
],
supports: {
    html: false
},
attributes : {
    ingredients: {
        type: "string",
        source: "text",
        selector: ".ingredients-ph"
    },
    cooking_time: {
        type: "string",
        source: "text",
        selector: ".cooking-time-ph"

    },
    utensils : {
        type: "string",
        source: "text",
        selector: ".utensils-ph"

    },
    cooking_experince : {
        type: "string",
        source: "text",
        selector: ".cooking-experince-ph"
    },
    meal_type : {
        type: "string",
        source: "text",
        selector: ".meal-type-ph"
    },
    text_alignment: {
        type: "string",

    },
    block_alignment : {
        type: "string",
        default: 'wide'
    }

},

getEditWrapperProps : ({block_alignment}) => {

    if(block_alignment === 'left' || block_alignment === 'right' || block_alignment === 'full' ) {
        return ( {'data-align' : block_alignment});
    }

},

edit : (props) => {

    return[
        <InspectorControls>
            <PanelBody title= {__('Basics', 'recipe')}>
                <PanelRow>
                    {__('You can write the content for block here', 'recipe')}
                </PanelRow>

                <TextControl 
                label={__('Ingredients', 'recipe')} 
                help={__('Ex: tomatoes, lettuce, olive oil, etc.', 'recipe')}
                value={props.attributes.ingredients}
                onChange = { (new_val) =>  {
                    props.setAttributes({ingredients: new_val})
                }}>
                </TextControl>

                <TextControl 
                label={__('Cooking Time', 'recipe')} 
                help={__('How long will this take to cook?', 'recipe')}
                value={props.attributes.cooking_time}
                onChange = { (new_val) =>  {
                    props.setAttributes({cooking_time: new_val})
                }}>
                </TextControl>

                <TextControl 
                label={__('Utensils', 'recipe')} 
                help={__('Ex: sppon, knife, pots, pans etc.', 'recipe')}
                value= {props.attributes.utensils}
                onChange = { (new_val) =>  {
                    props.setAttributes({utensils: new_val })
                }}>
                </TextControl>

                <SelectControl 
                label= {__('Cooking Experince', 'recipe')}
                help =  {__('How silled should the reade be?', 'recipe')}
                value={props.attributes.cooking_experince}
                onChange = {(new_val) => {
                    props.setAttributes({cooking_experince: new_val })
                }}
                options = {[
                    {value: "Beginner", label: "Beginner"},
                    {value: "Intermediate", label: "Intermediate"},
                    {value: "Expert", label: "Expert"}
                ]} />
           
                  
            </PanelBody>
        </InspectorControls>,
        <div className = {props.className}>
            <BlockControls>
                <AlignmentToolbar value={props.attributes.text_alignment} onChange={ (new_value) => props.setAttributes({text_alignment : new_value}) }></AlignmentToolbar>
                <BlockAlignmentToolbar value= {props.attributes.block_alignment} onChange={ (new_value) => props.setAttributes({block_alignment : new_value})}></BlockAlignmentToolbar>
            </BlockControls>
           
            <ul class="list-unstyled" style = {{textAlign: props.attributes.text_alignment}}>
                <li><strong> {__('Ingredients:', 'recipe')} </strong> <span className="ingredients-ph">{props.attributes.ingredients}</span>  </li>
                <li><strong> {__('Cooking Time:', 'recipe')} </strong> <span className="cooking-time-ph">{props.attributes.cooking_time}</span> </li>
                <li><strong> {__('Utensils:', 'recipe')} </strong> <span className="utensils-ph">{props.attributes.utensils}</span> </li>
                <li><strong> {__('Cooking Experience:', 'recipe')} </strong> <span className="cooking-experince-ph">{props.attributes.cooking_experince}</span> </li>
                <li><strong> {__('Meal Type:', 'recipe')} </strong> <span className="meal-type-ph"> {props.attributes.meal_type}</span></li>
            </ul>
        </div>

    ];

},
save : (props) => {


    return (

    <div className={`align${props.attributes.block_alignment}`}>
    <ul class="list-unstyled" style = {{textAlign: props.attributes.text_alignment}}>
        <li><strong> {__('Ingredients:', 'recipe')} </strong> <span className="ingredients-ph">{props.attributes.ingredients}</span>  </li>
        <li><strong> {__('Cooking Time:', 'recipe')} </strong> <span className="cooking-time-ph">{props.attributes.cooking_time}</span> </li>
        <li><strong> {__('Utensils:', 'recipe')} </strong> <span className="utensils-ph">{props.attributes.utensils}</span> </li>
        <li><strong> {__('Cooking Experience:', 'recipe')} </strong> <span className="cooking-experince-ph">{props.attributes.cooking_experince}</span> </li>
        <li><strong> {__('Meal Type:', 'recipe')} </strong> <span className="meal-type-ph"> {props.attributes.meal_type}</span></li>
    </ul>
</div>

    );
}

});