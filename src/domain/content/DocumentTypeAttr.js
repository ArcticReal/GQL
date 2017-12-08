
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {DocumentTypeType} from '../content/DocumentType.js';


const DocumentTypeAttrType = new GraphQLObjectType({
  name: 'DocumentTypeAttrType',
  description: 'Type for DocumentTypeAttr in content',

  fields: () => ({
    documentType: {
      type: DocumentTypeType,
      args : {documentTypeId: {type: GraphQLString}},
      resolve: (documentTypeAttr, args, {loaders}) => loaders.ofbiz.load(`documentTypes/find?documentTypeId=${documentTypeAttr.documentTypeId}`)
    },
    description: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {DocumentTypeAttrType};
    




const DocumentTypeAttrInputType = new GraphQLInputObjectType({
  name: 'DocumentTypeAttrInputType',
  description: 'input type for DocumentTypeAttr in content',

  fields: () => ({
    documentTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {DocumentTypeAttrInputType};
    