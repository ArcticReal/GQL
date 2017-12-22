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

const ShippingDocumentResponseType = new GraphQLObjectType({
  name: 'ShippingDocumentResponseType',
  description: 'response type for ShippingDocument',

  fields: () => ({
    description: {type: GraphQLString},
    documentId: {type: GraphQLString},
    shipmentId: {type: GraphQLString},
    shipmentItemSeqId: {type: GraphQLString},
    shipmentPackageSeqId: {type: GraphQLString}
  })
});

export {ShippingDocumentResponseType};
    