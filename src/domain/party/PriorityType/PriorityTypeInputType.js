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

const PriorityTypeInputType = new GraphQLInputObjectType({
  name: 'PriorityTypeInputType',
  description: 'input type for PriorityType',

  fields: () => ({
    description: {type: GraphQLString},
    priorityTypeId: {type: GraphQLString}
  })
});

export {PriorityTypeInputType};
    