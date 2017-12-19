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

const ResponsibilityTypeInputType = new GraphQLInputObjectType({
  name: 'ResponsibilityTypeInputType',
  description: 'input type for ResponsibilityType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    responsibilityTypeId: {type: GraphQLString}
  })
});

export {ResponsibilityTypeInputType};
    