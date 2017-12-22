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

const CostComponentTypeResponseType = new GraphQLObjectType({
  name: 'CostComponentTypeResponseType',
  description: 'response type for CostComponentType',

  fields: () => ({
    costComponentTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString}
  })
});

export {CostComponentTypeResponseType};
    