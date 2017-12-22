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

const ProductFeatureApplAttrResponseType = new GraphQLObjectType({
  name: 'ProductFeatureApplAttrResponseType',
  description: 'response type for ProductFeatureApplAttr',

  fields: () => ({
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    productFeatureId: {type: GraphQLString},
    productId: {type: GraphQLString}
  })
});

export {ProductFeatureApplAttrResponseType};
    