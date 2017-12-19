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

const ContactMechTypePurposeInputType = new GraphQLInputObjectType({
  name: 'ContactMechTypePurposeInputType',
  description: 'input type for ContactMechTypePurpose',

  fields: () => ({
    contactMechPurposeTypeId: {type: GraphQLString},
    contactMechTypeId: {type: GraphQLString}
  })
});

export {ContactMechTypePurposeInputType};
    