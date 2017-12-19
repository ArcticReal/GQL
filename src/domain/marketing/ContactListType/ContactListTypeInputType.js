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

const ContactListTypeInputType = new GraphQLInputObjectType({
  name: 'ContactListTypeInputType',
  description: 'input type for ContactListType',

  fields: () => ({
    contactListTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {ContactListTypeInputType};
    