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

const ContactMechTypeAttrInputType = new GraphQLInputObjectType({
  name: 'ContactMechTypeAttrInputType',
  description: 'input type for ContactMechTypeAttr',

  fields: () => ({
    attrName: {type: GraphQLString},
    contactMechTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {ContactMechTypeAttrInputType};
    