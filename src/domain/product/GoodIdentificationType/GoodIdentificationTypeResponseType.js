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

const GoodIdentificationTypeResponseType = new GraphQLObjectType({
  name: 'GoodIdentificationTypeResponseType',
  description: 'response type for GoodIdentificationType',

  fields: () => ({
    description: {type: GraphQLString},
    goodIdentificationTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString}
  })
});

export {GoodIdentificationTypeResponseType};
    