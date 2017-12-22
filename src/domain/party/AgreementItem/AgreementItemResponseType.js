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

const AgreementItemResponseType = new GraphQLObjectType({
  name: 'AgreementItemResponseType',
  description: 'response type for AgreementItem',

  fields: () => ({
    agreementId: {type: GraphQLString},
    agreementImage: {type: GraphQLString},
    agreementItemSeqId: {type: GraphQLString},
    agreementItemTypeId: {type: GraphQLString},
    agreementText: {type: GraphQLString},
    currencyUomId: {type: GraphQLString}
  })
});

export {AgreementItemResponseType};
    