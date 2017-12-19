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

const AgreementAttributeInputType = new GraphQLInputObjectType({
  name: 'AgreementAttributeInputType',
  description: 'input type for AgreementAttribute',

  fields: () => ({
    agreementId: {type: GraphQLString},
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString}
  })
});

export {AgreementAttributeInputType};
    