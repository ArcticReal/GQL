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

const ReturnAdjustmentTypeInputType = new GraphQLInputObjectType({
  name: 'ReturnAdjustmentTypeInputType',
  description: 'input type for ReturnAdjustmentType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    returnAdjustmentTypeId: {type: GraphQLString}
  })
});

export {ReturnAdjustmentTypeInputType};
    