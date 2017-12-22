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

const ContactMechTypeAttrResponseType = new GraphQLObjectType({
  name: 'ContactMechTypeAttrResponseType',
  description: 'response type for ContactMechTypeAttr',

  fields: () => ({
    attrName: {type: GraphQLString},
    contactMechTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {ContactMechTypeAttrResponseType};
    