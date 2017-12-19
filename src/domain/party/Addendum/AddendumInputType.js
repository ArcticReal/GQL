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

const AddendumInputType = new GraphQLInputObjectType({
  name: 'AddendumInputType',
  description: 'input type for Addendum',

  fields: () => ({
    addendumCreationDate: {type: GraphQLString},
    addendumEffectiveDate: {type: GraphQLString},
    addendumId: {type: GraphQLString},
    addendumText: {type: GraphQLString},
    agreementId: {type: GraphQLString},
    agreementItemSeqId: {type: GraphQLString}
  })
});

export {AddendumInputType};
    