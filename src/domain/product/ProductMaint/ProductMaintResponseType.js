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

const ProductMaintResponseType = new GraphQLObjectType({
  name: 'ProductMaintResponseType',
  description: 'response type for ProductMaint',

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

export {ProductMaintResponseType};
    