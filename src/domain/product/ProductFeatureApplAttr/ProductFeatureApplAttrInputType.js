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

const ProductFeatureApplAttrInputType = new GraphQLInputObjectType({
  name: 'ProductFeatureApplAttrInputType',
  description: 'input type for ProductFeatureApplAttr',

  fields: () => ({
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    productFeatureId: {type: GraphQLString},
    productId: {type: GraphQLString}
  })
});

export {ProductFeatureApplAttrInputType};
    