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

const ResponsibilityTypeResponseType = new GraphQLObjectType({
  name: 'ResponsibilityTypeResponseType',
  description: 'response type for ResponsibilityType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    responsibilityTypeId: {type: GraphQLString}
  })
});

export {ResponsibilityTypeResponseType};
    