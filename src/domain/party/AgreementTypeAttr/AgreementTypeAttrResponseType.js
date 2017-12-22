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

const AgreementTypeAttrResponseType = new GraphQLObjectType({
  name: 'AgreementTypeAttrResponseType',
  description: 'response type for AgreementTypeAttr',

  fields: () => ({
    agreementTypeId: {type: GraphQLString},
    attrName: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {AgreementTypeAttrResponseType};
    