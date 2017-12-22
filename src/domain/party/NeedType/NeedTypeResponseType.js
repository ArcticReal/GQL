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

const NeedTypeResponseType = new GraphQLObjectType({
  name: 'NeedTypeResponseType',
  description: 'response type for NeedType',

  fields: () => ({
    description: {type: GraphQLString},
    needTypeId: {type: GraphQLString}
  })
});

export {NeedTypeResponseType};
    