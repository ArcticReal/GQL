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

const DeductionTypeResponseType = new GraphQLObjectType({
  name: 'DeductionTypeResponseType',
  description: 'response type for DeductionType',

  fields: () => ({
    deductionTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString}
  })
});

export {DeductionTypeResponseType};
    