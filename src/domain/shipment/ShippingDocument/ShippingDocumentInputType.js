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

const ShippingDocumentInputType = new GraphQLInputObjectType({
  name: 'ShippingDocumentInputType',
  description: 'input type for ShippingDocument',

  fields: () => ({
    description: {type: GraphQLString},
    documentId: {type: GraphQLString},
    shipmentId: {type: GraphQLString},
    shipmentItemSeqId: {type: GraphQLString},
    shipmentPackageSeqId: {type: GraphQLString}
  })
});

export {ShippingDocumentInputType};
    