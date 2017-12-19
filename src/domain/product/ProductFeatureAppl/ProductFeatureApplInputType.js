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

const ProductFeatureApplInputType = new GraphQLInputObjectType({
  name: 'ProductFeatureApplInputType',
  description: 'input type for ProductFeatureAppl',

  fields: () => ({
    amount: {type: GraphQLFloat},
    fromDate: {type: GraphQLString},
    productFeatureApplTypeId: {type: GraphQLString},
    productFeatureId: {type: GraphQLString},
    productId: {type: GraphQLString},
    recurringAmount: {type: GraphQLFloat},
    sequenceNum: {type: GraphQLInt},
    thruDate: {type: GraphQLString}
  })
});

export {ProductFeatureApplInputType};
    