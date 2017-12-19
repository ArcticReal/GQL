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

const CustRequestCommEventInputType = new GraphQLInputObjectType({
  name: 'CustRequestCommEventInputType',
  description: 'input type for CustRequestCommEvent',

  fields: () => ({
    communicationEventId: {type: GraphQLString},
    custRequestId: {type: GraphQLString}
  })
});

export {CustRequestCommEventInputType};
    