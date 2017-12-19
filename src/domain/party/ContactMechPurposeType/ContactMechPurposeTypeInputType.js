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

const ContactMechPurposeTypeInputType = new GraphQLInputObjectType({
  name: 'ContactMechPurposeTypeInputType',
  description: 'input type for ContactMechPurposeType',

  fields: () => ({
    contactMechPurposeTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {ContactMechPurposeTypeInputType};
    