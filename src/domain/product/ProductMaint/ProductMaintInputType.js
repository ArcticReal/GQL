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

const ProductMaintInputType = new GraphQLInputObjectType({
  name: 'ProductMaintInputType',
  description: 'input type for ProductMaint',

  fields: () => ({
    intervalMeterTypeId: {type: GraphQLString},
    intervalQuantity: {type: GraphQLFloat},
    intervalUomId: {type: GraphQLString},
    maintName: {type: GraphQLString},
    maintTemplateWorkEffortId: {type: GraphQLString},
    productId: {type: GraphQLString},
    productMaintSeqId: {type: GraphQLString},
    productMaintTypeId: {type: GraphQLString},
    repeatCount: {type: GraphQLInt}
  })
});

export {ProductMaintInputType};
    