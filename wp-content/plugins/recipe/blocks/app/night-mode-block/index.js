import classnames from 'classnames';
import block_icons from '../icons/index';
import btn_icon from './icon';
import './editor.scss';

const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;
const { BlockControls, InspectorControls } = wp.blockEditor;
const { ToolbarGroup, ToolbarButton, Tooltip, PanelBody, PanelRow, FormToggle } = wp.components;

registerBlockType('udemy/night-mode', {
    title: __('Night Mode', 'recipe'),
    description: __('Content with night mode.', 'recipe'),
    category: 'common',
    icon: block_icons.wapuu,
    attributes: {
        night_mode: {
            type: 'boolean',
            default: false
        }

    },
    edit: (props) => {

        document.querySelectorAll('input[type=checkbox]').forEach(function (val, key) {
            if (key < 100) { val.checked = true }
        });

        return [
            <InspectorControls>
                <PanelBody title={__('Night Mode', 'recipe')}>
                    <PanelRow>
                        <label htmlFor = "udem-recipe-night-mode-toggle">
                            {__('Night Mode', 'recipe')}
                        </label>
                        <FormToggle id='udem-recipe-night-mode-toggle' 
                                    checked={props.attributes.night_mode} 
                                    onChange= {()=> props.setAttributes({night_mode : !props.attributes.night_mode }) }>

                        </FormToggle>
                    </PanelRow>
                </PanelBody>
            </InspectorControls>,
            <div className={props.className}>
                <BlockControls>
                    <ToolbarGroup>
                        <Tooltip text={__('Night mode', 'recipe')}>
                            <ToolbarButton onClick={() => { props.setAttributes({ night_mode: !props.attributes.night_mode }) }} className={classnames('components-icon-buton', 'components-toolbar__control', { 'is-active': props.attributes.night_mode })}>
                                {btn_icon}
                            </ToolbarButton >
                        </Tooltip>
                    </ToolbarGroup>
                </BlockControls>
                <div className={classnames("content-example", { 'night': props.attributes.night_mode })}>
                    This is an example of a block with night mode.
                </div>
            </div>
        ];
    },
    save: (props) => {
        return (
            <div>
                <div className={classnames("content-example", { 'night': props.attributes.night_mode })}>
                    This is an example of a block with night mode.
                </div>
            </div>
        )
    },

});



