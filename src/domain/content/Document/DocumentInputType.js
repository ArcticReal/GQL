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

const DocumentInputType = new GraphQLInputObjectType({
  name: 'DocumentInputType',
  description: 'input type for Document',

  fields: () => ({
    attributes: {type: GraphQLString},
    baseURI: {type: GraphQLString},
    childNodes: {type: GraphQLString},
    doctype: {type: GraphQLString},
    documentElement: {type: GraphQLString},
    documentURI: {type: GraphQLString},
    domConfig: {type: GraphQLString},
    firstChild: {type: GraphQLString},
    implementation: {type: GraphQLString},
    inputEncoding: {type: GraphQLString},
    lastChild: {type: GraphQLString},
    localName: {type: GraphQLString},
    namespaceURI: {type: GraphQLString},
    nextSibling: {type: GraphQLString},
    nodeName: {type: GraphQLString},
    nodeType: {type: GraphQLInt},
    nodeValue: {type: GraphQLString},
    ownerDocument: {type: GraphQLString},
    parentNode: {type: GraphQLString},
    prefix: {type: GraphQLString},
    previousSibling: {type: GraphQLString},
    strictErrorChecking: {type: GraphQLBoolean},
    textContent: {type: GraphQLString},
    xmlEncoding: {type: GraphQLString},
    xmlStandalone: {type: GraphQLBoolean},
    xmlVersion: {type: GraphQLString}
  })
});

export {DocumentInputType};
    