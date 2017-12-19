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

const ContactMechInputType = new GraphQLInputObjectType({
  name: 'ContactMechInputType',
  description: 'input type for ContactMech',

  fields: () => ({
    contactMechId: {type: GraphQLString},
    contactMechTypeId: {type: GraphQLString},
    infoString: {type: GraphQLString}
  })
});

export {ContactMechInputType};
    