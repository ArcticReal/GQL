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

const NeedTypeInputType = new GraphQLInputObjectType({
  name: 'NeedTypeInputType',
  description: 'input type for NeedType',

  fields: () => ({
    description: {type: GraphQLString},
    needTypeId: {type: GraphQLString}
  })
});

export {NeedTypeInputType};
    