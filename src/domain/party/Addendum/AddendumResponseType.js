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

const AddendumResponseType = new GraphQLObjectType({
  name: 'AddendumResponseType',
  description: 'response type for Addendum',

  fields: () => ({
    addendumCreationDate: {type: GraphQLString},
    addendumEffectiveDate: {type: GraphQLString},
    addendumId: {type: GraphQLString},
    addendumText: {type: GraphQLString},
    agreementId: {type: GraphQLString},
    agreementItemSeqId: {type: GraphQLString}
  })
});

export {AddendumResponseType};
    