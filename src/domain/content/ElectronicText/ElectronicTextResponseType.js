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

const ElectronicTextResponseType = new GraphQLObjectType({
  name: 'ElectronicTextResponseType',
  description: 'response type for ElectronicText',

  fields: () => ({
    dataResourceId: {type: GraphQLString},
    textData: {type: GraphQLString}
  })
});

export {ElectronicTextResponseType};
    