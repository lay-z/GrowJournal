// namespace Glob
import Moment from 'moment';

export namespace GJ {
// namespace Glob

    interface card {
        key: number
        name: string,
        comments: string,
        actions: Array<actions> ,
        timestamp: Moment.Moment,
        state: plantState,
        temperature: Number,
        humidity: number,
        warnings: Array<String>,
        ph: number,
        startDate: Moment.Moment
    }

    enum plantState {
        flowering,
        vegetative,
    }

    enum actions {
        watered,
        topped,
        transplanted,
        changedReservoir,
        pruned
    }
}