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

const AgreementAttributeResponseType = new GraphQLObjectType({
  name: 'AgreementAttributeResponseType',
  description: 'response type for AgreementAttribute',

  fields: () => ({
    agreementId: {type: GraphQLString},
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString}
  })
});

export {AgreementAttributeResponseType};
    