import block_icons from '../icons/index';

const { registerBlockType }         =   wp.blocks;
const { __ }                        =   wp.i18n;
const {RichText}                    =   wp.blockEditor

registerBlockType( 'udemy/rich-text', {
    title:                              __( 'Rich Text Example', 'recipe' ),
    description:                        __( 'Rich text example', 'recipe' ),
    category:                           'common',
    icon:                               block_icons.wapuu,
    attributes: {
        message : {
            type: 'string',
        }

    },
    edit: ( props ) => {
    
        return (
            <div className={ props.className }>
                <h3>Rich Text Example Block Admin</h3>
                <div>
                    <RichText placeholder="content" multiline="p" value={ props.attributes.message } onChange={(new_value) => {props.setAttributes({ message : new_value})}} />
                </div>
               
            </div>
        );
    },
    save: ( props ) => {

        return (

            <div>
                <h3>Rich Text Example Block Front</h3>
                <div>
                    <RichText.Content value={ props.attributes.message } />
                </div>
              
            </div>

        );

    }
});



