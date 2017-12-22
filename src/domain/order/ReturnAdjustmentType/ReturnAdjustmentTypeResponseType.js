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

const ReturnAdjustmentTypeResponseType = new GraphQLObjectType({
  name: 'ReturnAdjustmentTypeResponseType',
  description: 'response type for ReturnAdjustmentType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    returnAdjustmentTypeId: {type: GraphQLString}
  })
});

export {ReturnAdjustmentTypeResponseType};
    