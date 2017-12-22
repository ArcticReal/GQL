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

const AgreementItemTypeAttrResponseType = new GraphQLObjectType({
  name: 'AgreementItemTypeAttrResponseType',
  description: 'response type for AgreementItemTypeAttr',

  fields: () => ({
    agreementItemTypeId: {type: GraphQLString},
    attrName: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {AgreementItemTypeAttrResponseType};
    