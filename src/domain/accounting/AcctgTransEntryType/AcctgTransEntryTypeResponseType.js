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

const AcctgTransEntryTypeResponseType = new GraphQLObjectType({
  name: 'AcctgTransEntryTypeResponseType',
  description: 'response type for AcctgTransEntryType',

  fields: () => ({
    acctgTransEntryTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString}
  })
});

export {AcctgTransEntryTypeResponseType};
    