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

const DocumentTypeInputType = new GraphQLInputObjectType({
  name: 'DocumentTypeInputType',
  description: 'input type for DocumentType',

  fields: () => ({
    attributes: {type: GraphQLString},
    baseURI: {type: GraphQLString},
    childNodes: {type: GraphQLString},
    entities: {type: GraphQLString},
    firstChild: {type: GraphQLString},
    internalSubset: {type: GraphQLString},
    lastChild: {type: GraphQLString},
    localName: {type: GraphQLString},
    name: {type: GraphQLString},
    namespaceURI: {type: GraphQLString},
    nextSibling: {type: GraphQLString},
    nodeName: {type: GraphQLString},
    nodeType: {type: GraphQLInt},
    nodeValue: {type: GraphQLString},
    notations: {type: GraphQLString},
    ownerDocument: {type: GraphQLString},
    parentNode: {type: GraphQLString},
    prefix: {type: GraphQLString},
    previousSibling: {type: GraphQLString},
    publicId: {type: GraphQLString},
    systemId: {type: GraphQLString},
    textContent: {type: GraphQLString}
  })
});

export {DocumentTypeInputType};
    