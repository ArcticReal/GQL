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

const ContactMechAttributeInputType = new GraphQLInputObjectType({
  name: 'ContactMechAttributeInputType',
  description: 'input type for ContactMechAttribute',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    contactMechId: {type: GraphQLString}
  })
});

export {ContactMechAttributeInputType};
    