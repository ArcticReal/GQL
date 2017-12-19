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

const AgreementItemInputType = new GraphQLInputObjectType({
  name: 'AgreementItemInputType',
  description: 'input type for AgreementItem',

  fields: () => ({
    agreementId: {type: GraphQLString},
    agreementImage: {type: GraphQLString},
    agreementItemSeqId: {type: GraphQLString},
    agreementItemTypeId: {type: GraphQLString},
    agreementText: {type: GraphQLString},
    currencyUomId: {type: GraphQLString}
  })
});

export {AgreementItemInputType};
    