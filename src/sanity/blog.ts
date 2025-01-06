import { defineField, defineType} from "sanity"    

export const blog = defineType( {
    name: 'blog',
    title: 'blog',
    type: 'document',


    fields: [
         defineField({
            name: 'Title',
            type: 'string',
            title: 'Title',
            
        }),

        defineField({
            name: 'Paragraph',
            type: 'text',
            title: 'Paragraph',

        }),
        
        defineField({
            name:'slug',
            type:'slug',
            title:'Slug ',
            options:{
                source:'Title'
            }
        }),
        defineField({
            name:'image',
            type:'image',
            title:'Image',
            options:{
                hotspot:true
            }
        }),

        defineField({
           
            
            name:'block',
            type:'array',
            title:'Block',
            of: [{type:'block'}]
           
        }),


    ],
 
})
