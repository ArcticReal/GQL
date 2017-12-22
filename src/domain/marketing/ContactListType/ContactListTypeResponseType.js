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

const ContactListTypeResponseType = new GraphQLObjectType({
  name: 'ContactListTypeResponseType',
  description: 'response type for ContactListType',

  fields: () => ({
    contactListTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {ContactListTypeResponseType};
    