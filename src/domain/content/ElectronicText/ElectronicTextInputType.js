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

const ElectronicTextInputType = new GraphQLInputObjectType({
  name: 'ElectronicTextInputType',
  description: 'input type for ElectronicText',

  fields: () => ({
    dataResourceId: {type: GraphQLString},
    textData: {type: GraphQLString}
  })
});

export {ElectronicTextInputType};
    