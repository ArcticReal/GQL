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

const AgreementContentInputType = new GraphQLInputObjectType({
  name: 'AgreementContentInputType',
  description: 'input type for AgreementContent',

  fields: () => ({
    agreementContentTypeId: {type: GraphQLString},
    agreementId: {type: GraphQLString},
    agreementItemSeqId: {type: GraphQLString},
    contentId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {AgreementContentInputType};
    