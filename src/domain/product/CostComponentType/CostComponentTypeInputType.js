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

const CostComponentTypeInputType = new GraphQLInputObjectType({
  name: 'CostComponentTypeInputType',
  description: 'input type for CostComponentType',

  fields: () => ({
    costComponentTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString}
  })
});

export {CostComponentTypeInputType};
    